package algorithms

import "fmt"






 func multiplication(poly1 []int,poly2 []int) []int{

	result := make([]int, len(poly1)+len(poly2)-1) //initilize a slice of length of polynomial 1 and 2 less one

	for i:=0;i< len(poly1);i++{
		for j:=0; j < len(poly2);j++{
			result[i+j] += poly1[i] * poly2[j]
			/**
			*1st loop -> result[0+0] => 1*4 => 4
			*2nd loop on j -> result[0+1] => 1*5 => 5
			*2nd loop on i -> result[1+0] => 2*4 => 8
			*3rd loop on j -> result[1+1] => 2*5 => 10
			*3rd loop on i -> result[2+0] => 3*4 => 12
			*4th loop on j -> result[2+1] => 3*5 => 15
			*4th loop on i -> result[3+0] => 4*4 => 16
			*5th loop on j -> result[3+1] => 4*5 => 20
			
			***/
		}
	}
	return result

 }

 func Multiplication(){
	poly1 := []int{1,2,3} // 3x^2 + 2x +1
	poly2 := []int{4,5} // 5x+4
	result := multiplication(poly1,poly2)
	fmt.Println(result)
 }