// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract VoteBlock {
    // Estructura para representar un candidato
    struct Candidate {
        string name;          // Nombre del candidato
        uint8 voteCount;      // Cantidad de votos recibidos
    }
    // Estructura para representar un voto
    struct Vote {
        bool hasVoted;        // Indica si el votante ya emitió su voto
    }




    // Lista de candidatos
    Candidate[] public candidates;

    // Mapeo de direcciones a su estado de voto
    mapping(address => Vote) public voterState;

    // Contador de votos emitidos
    uint256 public totalVotes;


    // Constructor para inicializar la lista de candidatos
    constructor() {
        // Inicializar la lista de candidatos con nombres aleatorios
        candidates.push(Candidate("Candidato 1", 0));
        candidates.push(Candidate("Candidato 2", 0));
        candidates.push(Candidate("Candidato 3", 0));
        // Puedes agregar más candidatos según sea necesario
    }

    // Función para obtener la cantidad de candidatos
    function getCandidateCount() external view returns (uint256) {
        return candidates.length;
    }

    // Función para emitir un voto
    function vote(uint8 _candidateId) external {
        // Asegurar que el candidato es válido (puedes agregar más validaciones según sea necesario)
        require(_candidateId < candidates.length, "Invalid candidate ID");

        // Asegurar que el votante no haya votado previamente
        require(!voterState[msg.sender].hasVoted, "You have already voted");

        // Almacenar el voto en el contrato
        voterState[msg.sender] = Vote({
            hasVoted: true
        });

        // Incrementar el contador de votos del candidato
        candidates[_candidateId].voteCount++;

        // Incrementar el contador de votos total
        totalVotes++;
    }
}
