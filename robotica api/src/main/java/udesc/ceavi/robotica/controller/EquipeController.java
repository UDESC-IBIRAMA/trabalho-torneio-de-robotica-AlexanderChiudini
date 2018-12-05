package udesc.ceavi.robotica.controller;

import udesc.ceavi.robotica.model.Equipe;
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
import udesc.ceavi.robotica.repositorio.EquipeRepositorio;

/**
 *
 * @author Aparicio
 */

@RestController
@RequestMapping("/equipes")
public class EquipeController {
    
    @Autowired
    private EquipeRepositorio equ;
    
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public Equipe buscar(@PathVariable long id) {
        return equ.findById(id).get();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<Equipe> buscar() {
        return equ.findAll();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public Equipe salvar(@RequestBody Equipe c) {
        return equ.save(c);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable long id) {
        equ.deleteById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public Equipe atualizar(@PathVariable long id, @RequestBody Equipe eq) {
        Optional<Equipe> equSalvo = equ.findById(id);
        Equipe e = equSalvo.get();//Transforma optional na entidade
        BeanUtils.copyProperties(eq, e, "id");
        equ.save(e);
        return e;
    }
}
