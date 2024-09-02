package basic

import "fmt"

//subtraction of two negative numbers
func n_sub(a int, b int)int{
	return a-b
}


//subtraction of two positive numbers

func p_sub(a int, b int)int{
	return a-b
}

//subtraction of a positive and a negative number

func p_n_sub(a int,b int)int{
	return a-b
}


func Sub(){
	a:=10
	b:=5
	c:= -20
	d:=-15
	fmt.Println("Subtraction ...................************************......................")
	fmt.Println("subtraction of two positive numbers:",p_sub(a,b))
	fmt.Println("subtraction of two negative numbers:",n_sub(c,d))
	fmt.Println("subtraction of a positive and a negative number:",p_n_sub(a,c))
}
