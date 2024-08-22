package algorithms

import (
	"fmt"
	"math"
)

//Naive Multiplication Algorithm

/**
Divide each number into two halves, the high bits  H and Lower bits L

x = xHb^n/2 + Xl
y = yHb^n/2 +yl

e.g x = 1230
		where x =12
		      h = 10 ^2
			  l = 30

			  let b^n/2 =a


so multiplying x *y
 => (x*y) = (xHb^n/2 +Xl) *(yHb^n/2 +Yl)

          => XHb^n/2 + XHb^n/2Yl + XlYHb^n/2 +XlYl
		  => XHYHb^n +(XHYl +XlYH)b^n/2 + XlYl

=> xy = (XHa +Xl)(YHa+Yl)
      => XHaYHa +XHaYl + XlYHa+ XlYl
	  =>XHaYHa + (XHYl+XlYH)a + XlYl  //replace a withb^n/2
	  =>XHYH b^n +(XHYL+XlYH)b^n/2 +XlYl






***/

/*
Example

Let's use this method to multiply the base-10 numbers 1234 and  8765

x = 1234
y = 8765
x => XHb^n/2 +Xl => 12 *10^2 + 34
y => YHb^n/2 +Yl => 87 *10^2 +65
xy = XHYH b^n +(XHYL+XlYH)b^n/2 +XlYl
   => (12*87*10^4) + (12*65 + 34*87)^2 + 34*65

***/

func do_naive(num1 int, numb2 int)int{
	//b^n/2 = 10^2
	b:= math.Pow(10,2)
	
	//get remainder in number 1
	mod1:= num1 % int(b)
	mod2 := numb2 % int(b)
	
	//get quotient
	quot1:= (num1-mod1) / 100
	quot2:= numb2 / int(b)
	
	//multiply
	result:= (quot1*quot2*int(math.Pow(b,2))) +((quot1*mod2)+(quot2*mod1))*int(b) +(mod1*mod2)
	return result
}


func NaiveAlgorithm(){
	num1:= 12344
	num2:=  87655
	fmt.Println("Naive Algorithm ............................********************************................................")
	result:= do_naive(num1,num2)
	fmt.Println(result)
}