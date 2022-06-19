// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract Keyboards {
  	enum KeyboardKind { 
	    SixtyPercent, 
	    SeventyFivePercent,
      EightyPercent, 
	    Iso105 
	  }
  struct Keyboard {
    KeyboardKind kind; 
    // ABS = false, PBT = true
    bool isPBT;
    // tailwind filters to layer over
    string filter;
  }

Keyboard[] public createdKeyboards;

  function getKeyboards() view public returns(Keyboard[] memory) {
    return createdKeyboards;
  }

  // function create(string calldata _description) external {
  //   createdKeyboards.push(_description);
  // }

  function create(
    KeyboardKind _kind,
    bool _isPBT,
    string calldata _filter
  ) external {
    Keyboard memory newKeyboard = Keyboard({
      kind: _kind,
      isPBT: _isPBT,
      filter: _filter
    });

    createdKeyboards.push(newKeyboard);
  }


}