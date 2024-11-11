package main


import ("testing")


func BenchmarkConcatTwoStrings(b *testing.B) {
	str1:= "Hello"
	str2:= "World"
	for i := 0; i < b.N; i++ {
		ConcatTwoStrings(str1,str2)
		}
	
}

func BenchmarkConcatWithJoin(b *testing.B) {
	str1 := "Hello"
	str2 := "World"
	for i :=0;i < b.N; i++{
		ConcatWithJoin(str1, str2)
	}
	
}