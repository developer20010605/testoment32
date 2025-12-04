import Text "mo:base/Text";

actor HelloWorld {
  public query func getMessage() : async Text {
    "Hello World";
  };
};
