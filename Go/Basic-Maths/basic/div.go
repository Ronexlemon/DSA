package basic

import "fmt"

//div of two positive numbers

func p_div(a,b float64)float64{
	return a/b
}

//div of a positive and a negative number
func p_n_div(a,b float64)float64{
	return a/b
}

//div of two negative numbers
func n_div(a,b float64)float64{
	return a/b
}


//types of division
func exact_div(a,b int)int{
	fmt.Println("Division of two positive numbers")
	return a/b
}

//binary division
/****
*rules **** division by zero is meaninless
*1. 0 and 0 => 0 *****
2.  0 and 1 => 0
3.  1 and 1 => 1
4.  1 and 0 => 0***

***Steps
1. Compare the divisor with  the dividend. if the divisor is larger, place 0 as the quotient, then
bring the second it of the dividend down. if the divisor is samaller , multiply it with 1 and the result becomes the subtrahend. Then subtract the subtrahend from the minued to get the remainder
2.The bring down the next number bit from the dividend portion and perform step one or the whole dividend is divided
3. Repeat the same process untill the remainder becomes zero or the whole dividend is divided
****
E.G B= 011010 and C = 0101   , divide B by C
****
Dividend  = B and Divisor = C

1. Since the zero in the most significant bit position doesn't change the value of the number, remove it from both dividend and divisor
2.  B = 11010 and C = 101
The Div
1010/101 -> 101 |---------- 
					11010
					101
					---------
					   110
					   ---------

**/

func Div(){
	a:=10
	b:=20
	c:=-10
	d:= -20
	fmt.Println("division ..........................****************************................")
	fmt.Println("div of two positive numbers",p_div(float64(a),float64(b)))
	fmt.Println("div of a positive and a negative number",p_n_div(float64(a),float64(d)))
	fmt.Println("div of two negative numbers",n_div(float64(c),float64(d)))
	fmt.Println("exact div of two positive numbers",exact_div(a,b))

}