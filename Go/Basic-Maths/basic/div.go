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

func Div(){
	a:=10
	b:=20
	c:=-10
	d:= -20
	fmt.Println("division ..........................****************************................")
	fmt.Println("div of two positive numbers",p_div(float64(a),float64(b)))
	fmt.Println("div of a positive and a negative number",p_n_div(float64(a),float64(d)))
	fmt.Println("div of two negative numbers",n_div(float64(c),float64(d)))

}