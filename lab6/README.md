# **Лабораторная работа №6. Основы использования шейдеров**

## ***Задание 1***

Разработайте приложение, выполняющее при помощи вершинного шейдера «искривление» прямой линии, составленной в виде связанных отрезков прямых в кривую
линию. На вход вершинного шейдера поступают исходные координаты вершин, которые он трансформирует согласно формуле, соответствующей Вашему варианту.

### Вариант №3 – канабола – 30 баллов

R=1+sinx1+0,9cos8x1+0,1cos24x0,5+0,05cos140x

x'=R×cosx

y'=R×sinx

z'=z

На диапазоне x от 0 до 2π c шагом порядка π1000

![image](./images/Aspose.Words.7c6f4d7f-3894-411e-a650-dbdb63464fc4.027.png)

## ***Задание 2***

Разработайте приложение, выполняющее визуализацию прямоугольника с рисунком, соответствующим вашему варианту и формируемым при помощи фрагментного
шейдера без использования вспомогательных текстур.

### Вариант №4 – Кольцо – 25 баллов

![image](./images/Aspose.Words.7c6f4d7f-3894-411e-a650-dbdb63464fc4.031.png)