<template>
  <div>
    <div id="info-app">
      <img src="__PUBLIC__/img/register.jpg" width="100%" />
      <div class="inner">
        <van-cell-group>
          <van-field
            required
            readonly
            clickable
            label="地区"
            :value="address.value"
            placeholder="请选择您的地区"
            @click="address.pickerShow = true"
          ></van-field>
          <van-popup v-model="address.pickerShow" position="bottom">
            <van-picker
              show-toolbar
              :columns="address.data"
              @cancel="address.pickerShow = false"
              @confirm="addressConfirm"
              ref="addrPicker"
            ></van-picker>
          </van-popup>
          <van-field
            required
            readonly
            clickable
            label="学校"
            :value="school.value"
            placeholder="请选择您的学校"
            @click="getSchool"
          ></van-field>
          <van-popup v-model="school.pickerShow" position="bottom">
            <van-picker
              show-toolbar
              :columns="school.data"
              @cancel="school.pickerShow = false"
              @confirm="schoolConfirm"
            ></van-picker>
          </van-popup>
          <van-field required v-model="name" placeholder="请输入您的真实姓名" label="姓名" maxlength="12"></van-field>
          <van-field
            required
            v-model="studentNumber"
            v-show="idCardShow"
            placeholder="请输入您的学号"
            label="学号"
            maxlength="18"
          ></van-field>
          <van-field
            required
            v-model="idCard"
            v-show="idCardShow"
            placeholder="请输入您的身份证号码后六位"
            label="身份证号"
            maxlength="6"
          ></van-field>
          <van-field
            required
            type="tel"
            v-model="phone"
            placeholder="请输入您的联系方式"
            label="联系方式"
            maxlength="11"
          ></van-field>
          <div class="hint">* 本信息登记表仅用于合作校区，不可给校外人员使用。</div>
        </van-cell-group>
        <van-button type="info" class="btn" @click="submitInfo">立即注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      // roomNo: '',
      idCard: "",
      studentNumber: "",
      idCardShow: "", //是否显示学号和身份证号
      addressPicker: false,
      overlayShow: false,
      addressData: [],
      address: {
        pickerShow: false,
        data: [],
        value: ""
      },
      school: {
        pickerShow: false,
        data: [],
        id: "",
        value: "",
        type: 0
      },
      search: ""
    };
  },
  methods: {
    //选择地区事件
    addressConfirm(value, index) {
      this.address.value = value;
      this.address.pickerShow = false;
      this.school.value = "";
      this.school.id = "";
      // this.building.value = '';
      // this.building.id = '';
    },
    //获取学校列表
    getSchool: function() {
      let that = this;
      if (this.address.value) {
        axios({
          method: "post",
          url: "{:U('College/Index/get_school', ['i' => $Think._UNIACID_])}",
          data: {
            area: JSON.stringify(this.address.value)
          }
        })
          .then(function(res) {
            if (res.data.errno == 1) {
              that.school.data = res.data.data;
              that.school.pickerShow = true;
            } else {
              vant.Toast(res.data.err);
            }
          })
          .catch(function(error) {
            vant.Toast("您的网络不给力，请稍后重试");
          });
      } else {
        vant.Toast("请先选择地区才能选择高校");
      }
    },
    //学校选择事件
    schoolConfirm: function(value) {
      console.log(value);
      this.school.value = value.text;
      this.school.id = value.id;
      this.school.type = value.type;
      this.school.pickerShow = false;
      if (value.type == 1) {
        this.idCardShow = true;
      } else {
        this.idCardShow = false;
      }
    },
    // 提交注册信息
    submitInfo: function() {
        // this.$router.push("/main")
      let that = this;
      if (!this.address.value) {
        vant.Toast("请先选择地区");
        return false;
      }
      if (!this.school.id) {
        vant.Toast("请先选择高校");
        return false;
      }
      if (!this.name.trim() || this.name.length < 2) {
        vant.Toast("姓名不能为空并且不能低于2位");
        return false;
      }
      if (this.idCardShow && !this.studentNumber) {
        vant.Toast("请输入学号");
        return false;
      }
      if (this.idCardShow && !this.idCard) {
        vant.Toast("请输入身份证后六位");
        return false;
      }
      let phonereg = /^[01][3456789][0-9]{9}$/;
      if (!phonereg.test(this.phone)) {
        vant.Toast("手机格式错误，请输入正确的手机号");
        return false;
      }
      let my_data =this.school.type == 1? {studentNumber: this.studentNumber,type: this.school.type,idCard: this.idCard}: {};
      axios({
        method: "post",
        url: "{:U('College/Index/sub_bind', ['i' => $Think._UNIACID_])}",
        data: {
          school_id: this.school.id,
          name: this.name,
          phone: this.phone,
          ...my_data
        }
      })
        .then(function(res) {
          if (res.data.errno == 1) {
            vant.Dialog.alert({
              title: "注册成功",
              message:
                "您好," +
                that.name +
                ",恭喜您注册成功，请点击确定按钮进入高校生活服务"
            }).then(() => {
              setTimeout(() => {
                 location.href ="{:U('College/Index/index', ['i' => $Think._UNIACID_])}";
               
              }, 1000);
            });
          } else {
            vant.Toast(res.data.err);
          }
        })
        .catch(function(error) {
          vant.Toast("您的网络不给力，请稍后重试");
        });
    },
    onSearch: function(v) {
      this.building.data = window.buildingData.filter(i => i.text.includes(v));
    }
  },
  mounted() {
    this.address.data = JSON.parse("{$areas}"); // 获取地区列表
  }
};
</script>

<style lang="less" scoped>
@import "../style/index.less";
.inner{
     text-align: center;
    .hint{
    font-size: @fs-m;

}
}


</style>>
