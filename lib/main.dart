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
        primarySwatch: Colors.green, // Cor primária verde
        scaffoldBackgroundColor: Colors.black, // Fundo preto
        textTheme: TextTheme(
          headlineLarge: TextStyle(
            // Substitua headline1 por headlineLarge
            fontSize: 36,
            fontWeight: FontWeight.bold,
            color: Colors.green, // Texto verde
          ),
          bodyLarge: TextStyle(
            // Substitua bodyText1 por bodyLarge
            fontSize: 18,
            color: Colors.greenAccent, // Texto verde claro
          ),
          labelLarge: TextStyle(
            // Substitua button por labelLarge
            fontSize: 16,
            color: Colors.black, // Texto preto para botões
          ),
        ),
        appBarTheme: AppBarTheme(
          color: Colors.black, // Fundo preto para a AppBar
          titleTextStyle: TextStyle(
            fontSize: 24,
            fontWeight: FontWeight.bold,
            color: Colors.green, // Texto verde para o título da AppBar
          ),
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.green, // Cor de fundo dos botões
            foregroundColor: Colors.black, // Texto preto nos botões
          ),
        ),
      ),
      home: HomePage(), // Defina a HomePage como a página inicial
    );
  }
}
