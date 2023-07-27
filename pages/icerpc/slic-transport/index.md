---
title: The Slic multiplexed transport
show_toc: false
---

Slic is a [multiplexed transport][multiplexed-transport] that emulates [QUIC][quic] while relying on a traditional
duplex transport (such as TCP) for data transmission.

Like QUIC, Slic provides independent streams and flow control, and helps monitor the connection's health.

## QUIC vs Slic

Because Slic relies on a duplex transport—just like HTTP/2 relies on TCP—it can be affected by
[head-of-line blocking][hol] (HOL). The streams within a connection are not truly independent: the retransmission of an
IP packet in a TCP connection affects all the streams, not just one stream.

There is no such issue with QUIC connections, so when HOL is a concern, prefer QUIC over Slic.

Unlike QUIC, Slic doesn't require the use of TLS.

## Slic's underlying transport

Slic can convert any [duplex transport][duplex-transport] into a multiplexed transport. You would typically use Slic
with the TCP duplex transport, but you are not limited to TCP. For instance, in C#, you can use Slic with the Coloc
duplex transport too.

The name of the new multiplexed transport created with Slic is typically the name of the underlying duplex transport.
For example, Slic over TCP is the "tcp" multiplexed transport.

[hol]: https://en.wikipedia.org/wiki/Head-of-line_blocking
[quic]: https://datatracker.ietf.org/doc/rfc9000
[duplex-transport]: ../protocols-and-transports/ice-duplex-transports
[multiplexed-transport]: ../protocols-and-transports/icerpc-multiplexed-transports