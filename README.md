# Zama Developer Program - Level 2

Ovaj repozitorij sadrži implementaciju prvog pametnog ugovora prema [Zama Quick Start Tutorialu](https://docs.zama.ai/protocol/solidity-guides/getting-started/quick-start-tutorial).

## Postavljanje
- Inicijaliziran Hardhat projekt.
- Instalirana FHEVM biblioteka (`fhevm-contracts@0.1.0`) za podršku povjerljivim pametnim ugovorima.

## Implementacija
- **Counter.sol**: Osnovni Solidity ugovor za brojanje vrijednosti.
- **FHECounter.sol**: Pametni ugovor prilagođen za rad bez izravne FHE biblioteke zbog problema s uvozom TFHE.sol.
- **Testovi**: Testovi za oba ugovora nalaze se u `test/` direktoriju.

## Status
Završen Quick Start Tutorial za Zama Developer Program Level 2. Zbog problema s uvozom TFHE.sol u `fhevm-contracts@0.1.0`, FHECounter.sol je prilagođen za osnovne Solidity funkcionalnosti.
