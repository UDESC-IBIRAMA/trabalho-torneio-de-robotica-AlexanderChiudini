package udesc.ceavi.robotica.controller;

import udesc.ceavi.robotica.model.Arena;
import udesc.ceavi.robotica.model.Equipe;
import udesc.ceavi.robotica.repositorio.ArenaRepositorio;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Aparicio
 */
@RestController
@RequestMapping("/arenas")
public class ArenaController {

    @Autowired
    private ArenaRepositorio are;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Arena buscar(@PathVariable long id) {
        return are.findById(id).get();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Arena> buscar() {
        return are.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public Arena salvar(@RequestBody Arena arena) {
        return are.save(arena);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        are.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public Arena atualizar(@PathVariable long id, @RequestBody Equipe arena) {
        Optional<Arena> arenaSalvo = are.findById(id);
        Arena a = arenaSalvo.get();//Transforma optional na entidade
        BeanUtils.copyProperties(arena, a, "id");
        are.save(a);
        return a;
    }
}
