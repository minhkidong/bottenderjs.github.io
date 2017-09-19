import markdown from 'markdown-in-js';

import withDoc from '../../../lib/with-doc';

// prettier-ignore
export default withDoc({
  title: 'ConsoleContext',
  date: '2017/09/19',
  author: 'chentsulin',
})(markdown`

## platform

The name of the platform.

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

## client

The client instance.

Returns **ConsoleClient**

## event

The event instance.

Returns **ConsoleEvent**

## session

The session state of the context.

Returns **ConsoleSession?**

## setMessageDelay

Set delay before sending every messages.

**Parameters**

-   \`milliseconds\` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

Returns **void**

## typing

Delay and show indicators for milliseconds.

**Parameters**

-   \`milliseconds\` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>**

## sendText

Send text to the owner of then session.

**Parameters**

-   \`text\` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

Returns **void**

## rawEvent

Underlying raw event from Console.

Returns **ConsoleRawEvent**

## isMessage

Determine if the event is a message event.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**

## message

The message object from Console raw event.

Returns **Message**

## isTextMessage

Determine if the event is a message event which includes text.

Returns **[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)**
`);