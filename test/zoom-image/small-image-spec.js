describe('small image', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="zoom-image">
        <img src="./image.png">
      </div>
    `;
  });

  beforeEach(() => {
    mockBoundingClientRect($('div'), 10, 10, 100, 100);
    mockImageNaturalSize($('img'), 50, 50);
  });

  it('does not zoom image', () => {
    $('div').dispatchEvent(mockMouseEvent('mouseenter', { clientX: 20, clientY: 20, bubbles: true }));
    expect($('div').style.backgroundImage).toEqual('');

    $('div').dispatchEvent(mockMouseEvent('mousemove', { clientX: 30, clientY: 30, bubbles: true }));
    expect($('div').style.backgroundPosition).toEqual('');

    $('div').dispatchEvent(mockMouseEvent('mouseleave', { clientX: 10, clientY: 10, bubbles: true }));
    expect($('div').style.backgroundImage).toEqual('');
  });
});
