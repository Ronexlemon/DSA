package main

import (
	"fmt"
	"gobasicmaths/Number-Theory/eucideanalgo"
	"gobasicmaths/algorithms"
	"gobasicmaths/basic"
)


func main(){
	//basic maths
	fmt.Println("Basic Maths .................*****************......................")
	basic.Add()
	basic.Sub()
	basic.Mul()
	basic.Div()
	algorithms.NaiveAlgorithm()

	fmt.Println("THE NUMBER THEORY ******************************888888888")
	eucideanalgo.GCD()
}