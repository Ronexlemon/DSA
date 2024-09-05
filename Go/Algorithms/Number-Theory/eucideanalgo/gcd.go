package eucideanalgo

import "fmt"

/****
GCD The greated common divisor or Highest common factor
this is the number thats divides both numbers such that the remainder is zero
e.g GCD(10,7) = 1
GCD(10,5) = 5
GCD(54,24) =6
The factories of 54 = 2 *3*3*3
the factories of 24 =  2*2*2*3

STEPS
a >b
1 . Divide the  larger number a by, the smaller number b
2. Replace 'a' with 'b' and 'b' with the remainder from step 1
3. repeat step-1 and step-2 until the remainder is zero
4. once you get the remainder 0, the divisor will be the GCD of a and b at this stage

***/

func gcd_two(a,b int64)int64{
	if a < b{

		
		return gcd_two(b,a) // do swap and place b as the greatest
	}
	remainder := a % b
	if remainder == 0{
		return b
		}
		return gcd_two(b,remainder)
	
	

}

//gcd for three numbers
func gcd_three(a,b,c int64)int64{
	gcd_ab := gcd_two(a,b)
	return gcd_two(gcd_ab,c)
	}


	func gcd_four(a,b,c int64)int64{
		gcd_ab := gcd_two(a,b)
		return gcd_two(gcd_ab,c)
		}

func GCD(){
	a := int64(54)
	b := int64(24)
	c:= int64(47)
	gcd := gcd_two(a,b)
	fmt.Println("GCD of ",a," and ",b," is ",gcd)
	gcd = gcd_three(a,b,c)
	fmt.Println("GCD of ",a," and ",b," and ",c," is ",gcd)
}