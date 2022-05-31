describe("It should be able to set the price of the box of apples", function(){

it("should return the price of the box of apples ", function(){
  const  apple = apples()
    apple.setBoxOfApples(99.99)
    assert.equal(99.99, apple.getBoxOfApples())
})

it("should return the price of the box of apples ", function(){
    const  apple = apples()
      apple.setBoxOfApples(149.99)
      assert.equal(149.99, apple.getBoxOfApples())
  })

  it("should return the price of the box of apples ", function(){
    const  apple = apples()
      apple.setBoxOfApples(199.99)
      assert.equal(199.99, apple.getBoxOfApples())
  })
})

describe("It should be able to set the number of apples inside the box", function(){
    it("should return the number of apples inside the box",function(){
        const  apple = apples()
        apple.setApples(50)
        assert.equal(50, apple.getApples())

    })

    it("should return the number of apples inside the box",function(){
        const  apple = apples()
        apple.setApples(100)
        assert.equal(100, apple.getApples())

    })
    it("should return the number of apples inside the box",function(){
        const  apple = apples()
        apple.setApples(150)
        assert.equal(150, apple.getApples())

    })

})

describe("shold be able to set how many apples can be sold in one pack", function(){
    it("should return the number of apples inside the pack",function(){
        const  apple = apples()
        apple.setNumberOfApples(4)
        assert.equal(4, apple.getNumberOfApples())

    })

    it("should return the number of apples inside the pack",function(){
        const  apple = apples()
        apple.setNumberOfApples(6)
        assert.equal(6, apple.getNumberOfApples())

    })

    it("should return the number of apples inside the pack",function(){
        const  apple = apples()
        apple.setNumberOfApples(8)
        assert.equal(8, apple.getNumberOfApples())

    })
})

describe("should be able to calculate the total cost of one apple", function(){
       
it("should return the price of one apple",function(){
    
    const  apple = apples()
    apple.setOneApple(2.00)
    assert.equal(2.00, apple.getOneApple())


})

})


describe("should be able to calculate the total cost of  apples ", function(){
it("should return the total cost of tw0 apples ", function(){

    const  apple = apples()
    apple.setOneApple(1.50);

    apple.getTotalOfApple()
    apple.getTotalOfApple()
   


    assert.equal(3, apple.getTotalCost());
    assert.equal(3, apple.getTotalOfOneApple());
})

it("should return the total cost of six apples ", function(){

    const  apple = apples()
    apple.setOneApple(1.50);

    apple.getTotalOfApple()
    apple.getTotalOfApple()
    apple.getTotalOfApple()
    apple.getTotalOfApple()
   


    assert.equal(6.00, apple.getTotalCost());
    assert.equal(6.00, apple.getTotalOfOneApple());
})

it("should return the total cost of four apples ", function(){

    const  apple = apples()
    apple.setOneApple(1.50);

    apple.getTotalOfApple()
    apple.getTotalOfApple()
    apple.getTotalOfApple()
    
   


    assert.equal(4.50, apple.getTotalCost());
   // assert.equal(4.50, apple.getTotalOfOneApple());
})

})

describe(" should be able to calculate the profit of 6 packets", function(){

    it("should return the price of the box of apples ", function(){
        const  apple = apples()
       apple.setProfit(80)
       apple.setNumberOfApples(4)
       apple.setOneApple(2.00)

        
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          
          

          
         
      
          assert.equal(24.00, apple.getTotalCost());
        
          assert.equal(56.00, apple.getProfit());
      })

      it("should return the price of the box of apples ", function(){
        const  apple = apples()
       apple.setProfit(200)
       apple.setNumberOfApples(4)
       apple.setOneApple(5.00)

        
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          
          

          
         
      
          assert.equal(85.00, apple.getTotalCost());
        
          assert.equal(115.00, apple.getProfit());
      })

      it("should return the price of the box of apples ", function(){
        const  apple = apples()
       apple.setProfit(150)
       apple.setNumberOfApples(6)
       apple.setOneApple(3.00)

        
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          apple.getTotalOfApple()
          
          

          
         
      
          assert.equal(51.00, apple.getTotalCost());
        
          assert.equal(99.00, apple.getProfit());
      })
      
})

       

