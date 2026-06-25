



## *Stateful Type Qualifier Extension for Allo Python-to-HLS Framework*

### • MLIR, Xilinx Vitis HLS, Python

Extended Allo, a Python-to-HLS compiler framework that generates synthesizable hardware accelerator designs from Python kernels, with a stateful type qualifier that propagates persistent variable semantics through MLIR lowering and emits function-local static variables in Vitis HLS C++.

Implemented instance isolation in the compose() scheduler to ensure each instantiated kernel receives its own dedicated memref.global, preventing shared state and race conditions in multi-instance designs.

Validated correctness and performance on a Xilinx Alveo U280 FPGA, demonstrating a 1.22x speedup over a stateless baseline by eliminating redundant host-device data transfers across 100 kernel invocations.