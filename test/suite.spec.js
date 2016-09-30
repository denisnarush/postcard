describe('sute', function () {
  document.body.innerHTML = __html__['public/index.html'];

  it('try', function () {
    expect((new Suite).validate()).toBe(false);
  })
})