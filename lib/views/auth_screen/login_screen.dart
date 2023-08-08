import 'package:ecommerce_app/consts/consts.dart';
import 'package:ecommerce_app/consts/list.dart';
import 'package:ecommerce_app/controller/auth_controller.dart';
import 'package:ecommerce_app/views/auth_screen/signup_screen.dart';
import 'package:ecommerce_app/widgets_common/custom_textfield.dart';
import 'package:ecommerce_app/widgets_common/our_button.dart';
import 'package:flutter/material.dart';
import 'package:ecommerce_app/widgets_common/bg_widget.dart';
import 'package:ecommerce_app/widgets_common/applogo_widgets.dart';
import 'package:get/get.dart';
import 'package:ecommerce_app/views/home_screen/home.dart';



class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});


  @override
  Widget build(BuildContext context) {

    var controller = Get.put(AuthController());

    return bgWidget(
      child: Scaffold(
        resizeToAvoidBottomInset: false,
      body: Center(
        child: Column(
          children: [
            (context.screenHeight * 0).heightBox,
            applogoWidget(),
            // 20.heightBox,
            // "Log in to $appname".text.fontFamily(bold).white.size(20).make(),
            // 10.heightBox,
             Column(
              children: [
                customTextField(hint: emailHint,title:email, isPass: false, controller: controller.emailController),
                customTextField(hint: passwordHint , title: password, isPass: true , controller: controller.passwordController),
                Align(
                  alignment: Alignment.centerRight,
                  child: TextButton(onPressed: () {}, child: forgetPass.text.make())
                ),
                5.heightBox,
               // ourButton().box.width(context.screenWidth - 50).make(),
               ourButton(color: redColor ,title: login, textColor:whiteColor, onPress:() async {
              
                await controller.loginMethod( context).then((value){
                 if (value!){
                    VxToast.show(context,msg: loggedin);
                    Get.offAll(() => const Home());
                  }
                } 
                );
               })
               .box
               .width(context.screenWidth - 50)
               .make(),
                5.heightBox,
            createNewAccount.text.color(fontGrey).make(),
            5.heightBox,
            ourButton(color: lightGolden ,title: signup, textColor:redColor, onPress:(){
               Get.to(() => const SignupScreen());
            })
               .box
               .width(context.screenWidth - 50)
               .make(),

            10.heightBox,
            loginWith.text.color(fontGrey).make(),
            5.heightBox,

            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: List.generate(3, (index) => Padding(padding: const EdgeInsets.all(8.0),
              child: CircleAvatar(
                backgroundColor: lightGrey,
                radius: 25,
                child: Image.asset(socialIconList[index],
                width: 30,
                ),
                
              ),
              ) ),
            )

              ],
            ).box.white.rounded.padding(EdgeInsets.all(16)).width(context.screenWidth - 70).shadowSm.make(),
           

      ],
      ),
      )
    ),
    );
  }
}