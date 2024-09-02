package basic

import "fmt"

func p_sum(a int, b int)int{
	return a+b
}

//sum of two negative numbers

func n_Sum(a int,b int)int{
	return a+b

}

//sum for a positive number and negative
func p_n_sum(a int,b int)int{
	return a+b

}

func Add(){
	a:=10
	b:=20
	c:=-10
	d:=-20
	fmt.Println("Sum of two positive numbers:",p_sum(a,b))
	fmt.Println("Sum of two negative numbers:",n_Sum(c,d))
	fmt.Println("sum of a positive and a negative number",p_n_sum(a,c))

	
}