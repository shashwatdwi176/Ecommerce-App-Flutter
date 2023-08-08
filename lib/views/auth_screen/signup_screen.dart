import 'package:ecommerce_app/consts/consts.dart';
import 'package:ecommerce_app/consts/list.dart';
import 'package:ecommerce_app/controller/auth_controller.dart';
import 'package:ecommerce_app/widgets_common/custom_textfield.dart';
import 'package:ecommerce_app/widgets_common/our_button.dart';
import 'package:flutter/material.dart';
import 'package:ecommerce_app/widgets_common/bg_widget.dart';
import 'package:ecommerce_app/widgets_common/applogo_widgets.dart';
import 'package:get/get.dart';
import 'package:ecommerce_app/views/home_screen/home.dart';




class SignupScreen extends StatefulWidget {
  const SignupScreen({super.key});

  @override
  State<SignupScreen> createState() => _SignupScreenState();
}

class _SignupScreenState extends State<SignupScreen>{

bool? isCheck = false;
var controller = Get.put(AuthController());

//text controllers

var nameController = TextEditingController();
var emailController = TextEditingController();
var passwordController = TextEditingController();
var passwordRetypeController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return bgWidget(
      child: Scaffold(
        resizeToAvoidBottomInset: false,
      body: Center(
        child: Column(
          children: [
            (context.screenHeight * 0).heightBox,
            applogoWidget(),
            // 20.heightBox,
            // "Join  us  $appname".text.fontFamily(bold).white.size(20).make(),
            //10.heightBox,
             Column(
              children: [
                customTextField(hint: nameHint,title: name , controller: nameController, isPass: false),
                customTextField(hint: emailHint,title: email, controller: emailController,isPass: false),
                customTextField(hint: passwordHint , title: password, controller: passwordController,isPass: true),
                customTextField(hint: passwordHint , title: retypePassword, controller: passwordRetypeController, isPass: true),
                Align(
                  alignment: Alignment.centerRight,
                  child: TextButton(onPressed: () {}, child: forgetPass.text.make())
                ),
                5.heightBox,
               // ourButton().box.width(context.screenWidth - 50).make(),
              
              
              Row(
                children: [
                  Checkbox(
                    checkColor: redColor,
                    value: isCheck,
                    onChanged:(newValue) {
                      setState((){
                        isCheck = newValue;
                      });
                      
                    }, ),
                    10.widthBox,
                  Expanded(
              child: 
                    RichText(text: const TextSpan(
                      children:[
                         TextSpan(text: "I agree to the ", style: TextStyle(
                          fontFamily: bold,
                          color: fontGrey,
                        ),),
                        TextSpan(text: termsAndCond, style: TextStyle(
                          fontFamily: bold,
                          color: redColor,
                        ),),
                         TextSpan(text: " & ", style: TextStyle(
                          fontFamily: bold,
                          color: fontGrey,
                        ),),
                         TextSpan(text: privacyPolicy, style: TextStyle(
                          fontFamily: bold,
                          color: redColor,
                        ),),
                      ],
                    ),),

                  ),   

                   

              ],),

               ourButton(color: isCheck == true? redColor : lightGrey ,title: signup, textColor:whiteColor, onPress:() async {
                if (isCheck != false){
                  try{
                    await controller
                    .signupMethod(
                      emailController.text,passwordController.text,context,
                    
                      )

                    .then((value) {
                      return controller.storeUserData(
                        email: emailController.text,
                        password: passwordController.text,
                        name: nameController.text,
                      );
                    }).then((value) {
                      VxToast.show(context, msg: loggedin);
                      Get.offAll(() =>const Home());
                    });
                  }
                  catch(e){
                    auth.signOut();
                    VxToast.show(context, msg: e.toString());
                  }
                }
               })
               .box
               .width(context.screenWidth - 50)
               .make(), 
               10.heightBox,
               //wrapping into gesture detector of velocity X
               RichText(text: const TextSpan(
                children:[
                    TextSpan(
                      text: alreadyHaveAvccount,
                      style: TextStyle(
                        fontFamily: bold,
                        color: fontGrey
                      ),
                    ),
                       TextSpan(
                      text: login,
                      style: TextStyle(
                        fontFamily: bold,
                        color: redColor
                      ),
                   

                    ),
                ], 
                ),
                ).onTap(() {
                  Get.back();
                },
                ), 
            
      
           
              ],
            ).box
            .white
            .rounded
            .padding(const EdgeInsets.all(16))
            .width(context.screenWidth - 70)
            .shadowSm.make(),
           

      ],
      ),
      )
    ),
    );
  }
}