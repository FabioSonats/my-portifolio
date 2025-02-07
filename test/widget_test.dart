import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:my_portfolio/main.dart';

void main() {
  testWidgets('Verifica se os textos e o botão estão presentes na HomePage',
      (WidgetTester tester) async {
    // 1. Construa o aplicativo e acione um frame.
    await tester.pumpWidget(MyApp());

    // 2. Verifique se o texto "Olá, eu sou Fabio!" está presente.
    expect(find.text('Olá, eu sou Fabio!'), findsOneWidget);

    // 3. Verifique se o texto "Flutter Developer | Full Stack Enthusiast" está presente.
    expect(
        find.text('Flutter Developer | Full Stack Enthusiast'), findsOneWidget);

    // 4. Verifique se o botão "Saiba Mais" está presente.
    expect(find.text('Saiba Mais'), findsOneWidget);
  });

  testWidgets('Verifica se o botão "Saiba Mais" pode ser pressionado',
      (WidgetTester tester) async {
    // 1. Construa o aplicativo e acione um frame.
    await tester.pumpWidget(MyApp());

    // 2. Encontre o botão "Saiba Mais" e simule um toque.
    await tester.tap(find.text('Saiba Mais'));
    await tester.pump(); // Acione um frame após o toque.

    // 3. Verifique se o botão foi pressionado (não há ação definida no botão, então apenas verificamos se ele existe).
    expect(find.text('Saiba Mais'), findsOneWidget);
  });
}
