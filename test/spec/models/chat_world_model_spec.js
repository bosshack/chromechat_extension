describe("chatWorldModel", function() {
  var subject;

  beforeEach(function(){
    module('chromechatApp.Models');
    inject(function(chatWorldModel) {
      subject = new chatWorldModel();
    });
  });

  it('can inject the chatWorldModel', function () {
    expect(subject).not.toBe(undefined);
  });

  it('can update its list of rooms', function () {
    var newRooms = [];
    subject.updateRooms(newRooms);
    expect(subject.rooms).toEqual(newRooms);
    expect(subject.timestamps.rooms).not.toBe(undefined);
  });
});
