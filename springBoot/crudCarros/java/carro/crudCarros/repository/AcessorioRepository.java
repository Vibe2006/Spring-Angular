package carro.crudCarros.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import carro.crudCarros.entity.Acessorio;

public interface AcessorioRepository extends JpaRepository<Acessorio, Long> {

}
