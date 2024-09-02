package basic

import "fmt"

//multiplication of two positive numbers
func p_mul(a, b int) int {
	return a * b
	}

	//mul of a positive and a negative number

func p_n_mul(a,b int)int{
	return a*b
}

//mul of two negative numbers

func n_mul(a,b int)int{
	return a*b
}


func Mul(){
	a:=10
	b:=20
	c:=-10
	d:=-20
	fmt.Println("Multiplication .....................****************************.............")
	fmt.Println("Multiplication of two positive numbers:",p_mul(a,b))
	fmt.Println("Multiplication of a positive and a negative number:",p_n_mul(a,c))
	fmt.Println("Multiplication of two negative numbers:",n_mul(c,d))

}