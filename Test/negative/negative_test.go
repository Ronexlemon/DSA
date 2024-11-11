package main
import ("testing")

func  TestNonNegative(t *testing.T){
	//num1:= 10
	num2:= -20
	
	result := NoNegativeNumber(int64(num2))
	if result{
		t.Errorf("Expected true bt got %t ",result)
	}
}