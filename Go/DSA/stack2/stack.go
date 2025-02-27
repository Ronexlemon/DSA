package main

import "fmt"

type Stack struct{
	item []int  //LIFO
}

func (s *Stack) Push(num int){
	s.item = append(s.item, num)
}

func (s *Stack)Pop()int{
	if len(s.item) == 0{
		fmt.Println("Stack is empty")
		return -1}
		lastIndex :=len(s.item)-1
	popped := s.item[lastIndex]
	s.item =s.item[:lastIndex]
	return popped
}

func (s *Stack) StackValues()*Stack{
	return s
}

func main(){
	//push items into the stack
	s:=Stack{}
	s.Push(1)
	s.Push(2)
	s.Push(3)
	s.Push(4)
	values :=s.StackValues().item
	fmt.Printf("Values before Pop %d",values)
	s.Pop()
	s.Pop()
	s.Pop()
	valuesAfter :=s.StackValues().item
	fmt.Printf("Values After Pop %d",valuesAfter)



}