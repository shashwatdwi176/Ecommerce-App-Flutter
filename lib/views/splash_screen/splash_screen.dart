import 'package:ecommerce_app/consts/colors.dart';
import 'package:ecommerce_app/consts/consts.dart';
import 'package:ecommerce_app/widgets_common/applogo_widgets.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ecommerce_app/views/auth_screen/login_screen.dart';


class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {


  //creating a method to change screen

  changeScreen(){
    Future.delayed(const Duration(seconds: 3),(){
      //using getX
      Get.to(() => const LoginScreen());
    });
  }

  @override
  void initState(){
    changeScreen();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color.fromARGB(255, 184, 11, 11),
      body: Center(
        child:Column(children: [
          Align(alignment: Alignment.topLeft , child: Image.asset(icSplashBg, width: 300)),
          5.heightBox,
          applogoWidget(),
          // 30.heightBox,
          // appname.text.fontFamily(bold).size(22).white.make(),
          0.heightBox,
          appversion.text.white.make(),
          Spacer(),
          credits.text.white.fontFamily(semibold).make(),
          30.heightBox,
        ],),
        )
    );
  }
}