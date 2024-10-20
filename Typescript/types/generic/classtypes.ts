const create = <Type>(arg: { new (): Type }): Type => {
    return new arg();
  };
  
  class NumberWrapper {
    value: number;
    constructor() {
      this.value = 10; 
    }
  }
  
  (() => {
    const obj = create<NumberWrapper>(NumberWrapper);
    console.log(obj.value);  
  })();
  