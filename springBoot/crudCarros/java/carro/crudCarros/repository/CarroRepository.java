package carro.crudCarros.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import carro.crudCarros.entity.Carro;

public interface CarroRepository extends JpaRepository<Carro, Long> {
	// o Carro siginifca a classe que ele vai trabalhar e o Long o tipo da classe primária
	
	public List<Carro> findByNome(String nome);
	
	
	//vc pode pular a palavra SELECT, o prórpio spring boot entende
	
	@Query("FROM Carro c WHERE c.anoFabricacao > :ano")
	List<Carro> findAcimaAno(int ano);

}