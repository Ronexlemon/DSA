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
//pop
func(s *Stack)pop(){
	if len(s.Items) > 0{
		s.Items = s.Items[:len(s.Items)-1]
		}else{
			fmt.Println("Stack is empty")
			}
}

func main(){
	stack := Stack{}
	stack.push(10)
	stack.push(20)
	stack.push(30)
	fmt.Println("INITIAL STACK",stack.LIFO())
	stack.pop()
	fmt.Println("AFTER POP",stack.LIFO())
	stack.pop()
	fmt.Println("AFTER POP",stack.LIFO())
	stack.pop()
	fmt.Println("AFTER POP",stack.LIFO())
	
	
}