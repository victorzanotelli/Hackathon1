<?php

namespace App\Controller;

use App\Controller\AbstractController;
use App\Model\SDMManager;
use App\Model\UserManager;

class SDMController extends AbstractController
{
    public function contentCreator(): void
    {

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $trimPost = array_map('trim', $_POST);
            $posts = array_map('htmlentities', $trimPost);
            $sDMManager = new SDMManager();
            $sDMManager->insert($posts);
        }
    }
    public function contentIndex(): string
    {
            $contentManager = new SDMManager();
            $posts = $contentManager->selectAll();

        return $this->twig->render('Home/index.html.twig', ['posts' => $posts]);
    }
}
