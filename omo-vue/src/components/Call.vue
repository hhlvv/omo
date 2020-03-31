<template>
    <div>
        <v-card  class="pa-2"
            outlined
            tile>나
            <v-btn v-on:click.native="callPhone()" color="primary" fab small dark>
                <i class="material-icons" style="font-size:30px;">phone</i>
            </v-btn>

            <v-btn  v-on:click.native="messagePhone()" color="warning" fab small dark>
                <i class="material-icons" style="font-size:30px;">forum</i>
            </v-btn>
        </v-card>
    </div>
</template>


<script>
  export default {
    name: 'call-component',
    methods:{
        callPhone:function(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                alert("mobile!!");
                location.href='tel:0212345678'
            }else{
                alert("not mobile;");
            }
        },
        messagePhone:function(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
                alert("mobile^^!!");
                location.href='sms:0212345678'
            }else{
                alert("not mobile^^");
            }
        }
    }
  }
</script>
