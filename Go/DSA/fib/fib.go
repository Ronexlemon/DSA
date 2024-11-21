package main

import "fmt"

func Fib(n int)int{
	if n ==0{
		
		return 0
	}
	if n == 1{
		return 1
		}		
			return Fib(n-1)+Fib(n-2)
		
}
func Fib2(num int){
	fib :=make([]int,num)
	fib[0] =0
	fib[1] =1
	for i:=2; i<num;i++{
		fib[i] = fib[i-1] +fib[i-2]
		
	}
	for _,nums :=range fib{
		fmt.Print(nums)
	}
}
func main(){
	num:= 20
	fmt.Println(Fib(num))
	Fib2(num)
}