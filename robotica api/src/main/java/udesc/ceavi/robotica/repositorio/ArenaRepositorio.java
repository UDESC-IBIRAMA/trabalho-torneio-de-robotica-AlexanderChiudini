package udesc.ceavi.robotica.repositorio;


import org.springframework.data.jpa.repository.JpaRepository;
import udesc.ceavi.robotica.model.Arena;

/**
 *
 * @author Aparicio
 */
public interface ArenaRepositorio extends JpaRepository<Arena, Long>{
    
}
