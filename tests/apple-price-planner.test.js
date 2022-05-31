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

