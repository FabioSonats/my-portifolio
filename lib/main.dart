import 'package:flutter/material.dart';
import 'package:my_portfolio/view/home_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Portfólio de Fabio',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: HomePage(), // Defina a HomePage como a página inicial
    );
  }
}
