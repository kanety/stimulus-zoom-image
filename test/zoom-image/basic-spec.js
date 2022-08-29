describe('basic', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-controller="zoom-image">
        <img src="./image.png">
      </div>
    `;
  });

  beforeEach(() => {
    mockBoundingClientRect($('div'), 10, 10, 100, 100);
    mockImageNaturalSize($('img'), 1920, 1080);
  });

  it('zooms image', () => {
    $('div').dispatchEvent(mockMouseEvent('mouseenter', { clientX: 20, clientY: 20, bubbles: true }));
    expect($('div').style.backgroundImage).toMatch(/image\.png/);
    expect($('div img').style.visibility).toEqual('hidden');

    $('div').dispatchEvent(mockMouseEvent('mousemove', { clientX: 30, clientY: 30, bubbles: true }));
    expect($('div').style.backgroundPosition).toMatch(/.+% .+%/);

    $('div').dispatchEvent(mockMouseEvent('mouseleave', { clientX: 10, clientY: 10, bubbles: true }));
    expect($('div').style.backgroundImage).toEqual('');
    expect($('div img').style.visibility).toEqual('');
  });
});
