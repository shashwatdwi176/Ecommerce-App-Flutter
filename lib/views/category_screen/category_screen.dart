import 'package:ecommerce_app/consts/consts.dart';
import 'package:ecommerce_app/consts/list.dart';
import 'package:ecommerce_app/widgets_common/bg_widget.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:ecommerce_app/views/category_screen/category_detail.dart';

class CategoryScreen extends StatelessWidget {
  const CategoryScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return bgWidget(
      child: Scaffold(
        appBar: AppBar(
          title: categories
          .text
          .fontFamily(bold)
          .white
          
          .make(),
        ),
        body: Container(
          padding: const EdgeInsets.all(12),
          child:GridView.builder(
            shrinkWrap: true,
            itemCount: 15,
            
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3,
              mainAxisSpacing: 8,
              crossAxisSpacing: 8,
              mainAxisExtent: 200,
            ), 
            itemBuilder: (context, index)
           {
             return 
               Column(
                
                children: [
                  Image.asset(categoryImage[index],
                  height: 100, 
                  width: 200,
                  fit: BoxFit.contain,
                  
                  ),
                  20.heightBox,
                  "${categoriesList[index]}"
                  .text
                  .color(darkFontGrey)
                  .align(TextAlign.center)
                  .make()
                ],
              )
              .box
              .white
              .rounded
              .clip(Clip.antiAlias)
              .shadowSm
              .make().onTap(() {
            Get.to(()=> CategoryDetails(title: categoriesList[index],),);
          });
            
          } ))
        ),
      );
    
  }
}