package main

import ("testing")
func FuzzSubt(f *testing.F) {
	f.Add(int64(1), int64(2))
	f.Add(int64(2), int64(3))
	f.Add(int64(100), int64(20))
	f.Add(int64(0), int64(0))
	f.Add(int64(0), int64(1))
	f.Fuzz(func(t *testing.T,num1 int64,num2 int64){
		result ,err:= FuzzSubtraction(num1,num2)
		if err!=nil{
			t.Errorf("error %v",err)
			}
			if result < 0 {
				t.Errorf("result %d is less than 0",result)
			}
	})


	
}