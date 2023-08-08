import 'package:ecommerce_app/consts/list.dart';
import 'package:ecommerce_app/views/category_screen/item_details.dart';
import 'package:flutter/material.dart';
import 'package:ecommerce_app/widgets_common/bg_widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:ecommerce_app/consts/consts.dart';
import 'package:get/get.dart';


class CategoryDetails extends StatelessWidget {
 final String? title;
  CategoryDetails({super.key,required this.title});

  @override
  Widget build(BuildContext context) {
    return bgWidget(
      child: Scaffold(
        appBar: AppBar(
          title: title!
          .text
          .fontFamily(bold)
          .white
          .make()
        ),
        body: Container(
          padding: EdgeInsets.all(12),
          child: Column(
            children: [
              SingleChildScrollView(
                physics: BouncingScrollPhysics(),
                scrollDirection: Axis.horizontal ,
                child:  Row(
                children: 
                  List.generate(6, (index) => "Mixer Grinder"
                  .text
                  .size(14)
                  .fontFamily(semibold)
                  .color(darkFontGrey)
                  .makeCentered()
                  
                  .box
                  .white
                  .rounded
                  .size(120,60)
                  .margin(const EdgeInsets.symmetric(horizontal: 4)).make(),),
                
              ),
              ),

              //items container 
              20.heightBox,
              Expanded(
                child: GridView.builder(
                  physics: BouncingScrollPhysics(),
                  shrinkWrap: true,
                  itemCount: 6,
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2,mainAxisExtent: 250,mainAxisSpacing: 8,crossAxisSpacing: 8), itemBuilder: (context, index){
                    return Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Image.asset(
                        imgFc1,
                        height: 150,
                        width: 200,
                        fit: BoxFit.cover,
                        ),
                        
                        "1000W Mixer Grinder".text.fontFamily(semibold).color(darkFontGrey).make(),

                        10.heightBox,
                        "\$600".text.color(redColor).fontFamily(bold).size(16).make(),
                        10.heightBox,
                      ],
                    ).box
                     .white
                     .margin(const EdgeInsets.symmetric(horizontal: 4),)
                     .roundedSM
                     .outerShadow
                     .padding(const EdgeInsets.all(12))
                     .make().onTap(() {
                      Get.to(() => ItemDetails(title: "Dummyitem"));
                     });
                },)
                ,),
                
            ],
          ),
        ),
      ),
    );
  }
}