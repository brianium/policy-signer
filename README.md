#policy-signer

Simple command line utility for signing AWS policy files.

##Usage

```
Usage: signer <path> <key>

Options:

  -h, --help     output usage information
  -V, --version  output the version number
```

```
$ signer sample-policy.json supersecretkey

Policy:
eyJleHBpcmF0aW9uIjogIjIwMjAtMDEtMDFUMDA6MDA6MDBaIiwKICAiY29uZGl0aW9ucyI6IFsKICAgIHsiYnVja2V0IjogInNhbXBsZS1idWNrZXQifSwKICAgIFsic3RhcnRzLXdpdGgiLCAiJGtleSIsICIiXSwKICAgIHsiYWNsIjogInByaXZhdGUifSwKICAgIFsic3RhcnRzLXdpdGgiLCAiJENvbnRlbnQtVHlwZSIsICIiXSwKICAgIFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLCAwLCAyMDAwMDAwMF0sCiAgICBbInN0YXJ0cy13aXRoIiwgIiRmaWxlbmFtZSIsICIiXQogIF0KfQo=

Signature:
QF+JVWEY5SvSJTKQjvIUU9quADw=

```

##Installation

```
# locally
$ npm install --save-dev policy-signer

# globally
$ npm install -g policy-signer
```

##Motivation

This is really just a simple utility to make signing a policy easy. It is not the most secure
due to requiring the key on the command line, so it might make sense to clear your terminal history
when you are done:

```
$ history -c
```
