package main


func FuzzSubtraction(num1,num2 int64)(int64,error){
	var result int64
	if num1 > num2{
		result = (num1-num2)
		}else{
			result = (num2-num1)
			}
			return result,nil
	}


