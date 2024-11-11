package main

import "fmt"


func NoNegativeNumber(number int64)bool{
	return number > 0
}

func main(){
	var number int64 = -10
	result := NoNegativeNumber(number)
	fmt.Println("result",result)
}