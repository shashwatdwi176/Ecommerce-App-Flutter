import 'package:ecommerce_app/consts/consts.dart';
import 'package:ecommerce_app/consts/list.dart';
import 'package:ecommerce_app/views/home_screen/components/featured_category.dart';
import 'package:ecommerce_app/widgets_common/home_button.dart';
import 'package:flutter/material.dart';
import 'package:velocity_x/velocity_x.dart';


class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(12),
      color: lightGrey,
      width: context.screenWidth,
      height: context.screenHeight,
      child: SafeArea(child: Column(
        children: [
            Container(
              alignment: Alignment.center,
              height: 60,
              color: lightGrey,
              width:380,
              
              child: TextFormField(
                decoration: const InputDecoration(
                  border: InputBorder.none,
                  suffixIcon: Icon(Icons.search),
                  filled: true,
                  fillColor: whiteColor,
                  hintText: searchanything,
                  hintStyle: TextStyle(color: textfieldGrey),
                ),
              ),
            ),
            Expanded(child: 
        SingleChildScrollView( 
          physics: const BouncingScrollPhysics(),   
       child: Column(
          children: [
             //swippers brands
            VxSwiper.builder(aspectRatio: 20/9,
            autoPlay: true,
            height: 150,
            enlargeCenterPage: true,
            itemCount: slidersList.length,
            itemBuilder: (context,index){
              return 
                 Image.asset(
                  slidersList[index],
                   fit: BoxFit.fill,).box.rounded.clip(Clip.antiAlias).margin(const EdgeInsets.all( 8)).make();
              
            },
            ),
            5.heightBox,
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: List.generate(2, (index) => homeButtons(
                height: context.screenHeight * 0.15,
                width: context.screenWidth / 2.5,
                icon: index == 0 ? icTodaysDeal: icFlashDeal,
                title: index == 0 ? todayDeal : flashsale
              ),),
            ),
            5.heightBox,
            //2nd swipper
            VxSwiper.builder(aspectRatio: 20/9,
            autoPlay: true,
            height: 150,
            enlargeCenterPage: true,
            itemCount: secondslidersList.length,
            itemBuilder: (context,index){
              return 
                 Image.asset(
                  secondslidersList[index],
                   fit: BoxFit.fill,).box.rounded.clip(Clip.antiAlias).margin(const EdgeInsets.all( 8)).make();
              
            },
            ),

            //category buttons
            5.heightBox,
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: 
                List.generate(3, (index) => homeButtons(
                   height: context.screenHeight * 0.15,
                   width: context.screenWidth / 3.5,
                   icon: index == 0? icTopCategories: index == 1? icBrands : icTopSeller,

                   title: index ==0? topCategories : index == 1? brand: topSellers,
                ),
                ),
              
            ),

            //featured categories
            20.heightBox,

            Align(
              alignment: Alignment.centerLeft,
              child: featuredCatergories
            .text
            .color(darkFontGrey)
            .fontFamily(semibold)
            .size(18)
            .make()
            ),
            20.heightBox,
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
            child:Row(
              children: 
                List.generate(3, 
                (index) => 
                Column(children: [
                  featuredButton(icon: featuredImage1[index], title: featuredTitle1[index]),
                  10.heightBox,
                  featuredButton(icon: featuredImage2[index], title: featuredTitle2[index]),
                ],
                ),
                )
              
            ),
            ),

            
            
          ],
        ),
        ) ,
            ), 
      ],
      ),
      ),
      );
  }
}