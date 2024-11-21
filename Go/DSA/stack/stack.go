package main

import "fmt"


type Stack struct{
	Items []int
}

//push into stack


func (s *Stack) push(item int){
	s.Items = append(s.Items, item)

}
func (s *Stack) LIFO()([]int){
	return s.Items
}

func main(){
	stack := Stack{}
	stack.push(10)
	stack.push(20)
	stack.push(30)
	fmt.Println(stack.LIFO())
	
}