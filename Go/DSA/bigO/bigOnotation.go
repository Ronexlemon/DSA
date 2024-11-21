package main

import (
	"fmt"
	"time"
)



func CalculateSum(num []int)int{
	sum:=0
	for _,n := range num{
		sum+=n
	}
	return sum
}
func main(){
	start:= time.Now()
	num:=[]int{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26}
	sum:=CalculateSum(num)
	fmt.Println("Sum of numbers is:",sum)
	fmt.Println("Time taken:",time.Since(start))
}